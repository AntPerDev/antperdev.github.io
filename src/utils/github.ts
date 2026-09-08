/**
 * Parseador seguro de URLs de repositorios de GitHub.
 * Extrae el propietario y el nombre del repositorio de forma estricta.
 */
export function parseGitHubRepo(
  url: string,
): { owner: string; repo: string } | null {
  if (!url) return null;

  try {
    // Expresión regular robusta para validar URLs de repositorios de GitHub
    const regex =
      /^https?:\/\/(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)\/?$/;
    const match = url.trim().match(regex);

    if (match) {
      return {
        owner: match[1],
        repo: match[2],
      };
    }
  } catch (error) {
    console.error("Error al analizar la URL de GitHub:", error);
  }

  return null;
}

/**
 * Sanitiza una URL para asegurar que solo se permitan protocolos seguros (http y https).
 * Previene vulnerabilidades Cross-Site Scripting (XSS) mediante 'javascript:' u otros vectores.
 */
export function sanitizeUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  const trimmed = url.trim();
  if (trimmed === "") return null;

  try {
    const parsed = new URL(trimmed);
    // Permitir estrictamente http: y https:
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return trimmed;
    }
  } catch (e) {
    // Si no es una URL absoluta válida pero podría ser un path relativo seguro (ej. /images/...)
    if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
      return trimmed;
    }
  }

  return null;
}

/**
 * Resuelve el enlace "live" de un proyecto con prioridad absoluta para el frontmatter.
 * Si no está definido en el frontmatter, intenta obtener el campo 'homepage' desde la API de GitHub en build-time.
 */
export async function getLiveLink(
  frontmatterLive: string | null | undefined,
  repoUrl: string,
  _slug: string,
): Promise<string | null> {
  // 1. Prioridad absoluta: enlace definido en el frontmatter
  if (frontmatterLive && frontmatterLive.trim() !== "") {
    const sanitized = sanitizeUrl(frontmatterLive);
    if (sanitized) return sanitized;
    return null;
  }

  // 2. Si no hay live, resolver usando la API de GitHub
  const repoInfo = parseGitHubRepo(repoUrl);
  if (!repoInfo) return null;

  const { owner, repo } = repoInfo;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

  try {
    const headers: Record<string, string> = {
      "User-Agent": "Astro-Portfolio-Build-Agent",
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { homepage?: string | null };

    if (data && data.homepage) {
      const sanitizedHomepage = sanitizeUrl(data.homepage);
      if (sanitizedHomepage) {
        return sanitizedHomepage;
      }
    }
  } catch {
    return null;
  }

  return null;
}
