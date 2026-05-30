import { getLiveLink, parseGitHubRepo } from './github';

describe('parseGitHubRepo', () => {
  test('should correctly parse valid GitHub repository URLs', () => {
    expect(parseGitHubRepo('https://github.com/antperdev/miportfolio2')).toEqual({
      owner: 'antperdev',
      repo: 'miportfolio2',
    });
    expect(parseGitHubRepo('https://github.com/antperdev/miportfolio2/')).toEqual({
      owner: 'antperdev',
      repo: 'miportfolio2',
    });
  });

  test('should return null for invalid or unsafe URLs', () => {
    expect(parseGitHubRepo('https://malicious.com/antperdev/repo')).toBeNull();
    expect(parseGitHubRepo('javascript:alert(1)')).toBeNull();
    expect(parseGitHubRepo('')).toBeNull();
    expect(parseGitHubRepo('https://github.com/invalid')).toBeNull();
  });
});

describe('getLiveLink', () => {
  let originalFetch: typeof global.fetch;

  beforeAll(() => {
    originalFetch = global.fetch;
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  beforeEach(() => {
    jest.resetModules();
    delete process.env.GITHUB_TOKEN;
  });

  test('should return the frontmatter live link if provided and safe', async () => {
    const result = await getLiveLink('https://proyecto.netlify.app', 'https://github.com/antperdev/repo', 'repo');
    expect(result).toBe('https://proyecto.netlify.app');
  });

  test('should sanitize and reject unsafe frontmatter live links', async () => {
    const result = await getLiveLink('javascript:alert("hack")', 'https://github.com/antperdev/repo', 'repo');
    expect(result).toBeNull();
  });

  test('should fetch from GitHub API if live link is empty or null', async () => {
    const mockFetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ homepage: 'https://github-homepage.app' }),
      })
    );
    global.fetch = mockFetch as unknown as typeof global.fetch;

    const result = await getLiveLink('', 'https://github.com/antperdev/repo', 'repo');
    
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/antperdev/repo',
      expect.objectContaining({
        headers: expect.any(Object),
      })
    );
    expect(result).toBe('https://github-homepage.app');
  });

  test('should return null if GitHub API has no homepage', async () => {
    const mockFetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ homepage: null }),
      })
    );
    global.fetch = mockFetch as unknown as typeof global.fetch;

    const result = await getLiveLink(null, 'https://github.com/antperdev/repo', 'repo');
    expect(result).toBeNull();
  });

  test('should return null and log message on API error (e.g. 404)', async () => {
    const mockFetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.resolve({ message: 'Not Found' }),
      })
    );
    global.fetch = mockFetch as unknown as typeof global.fetch;

    const result = await getLiveLink('', 'https://github.com/antperdev/repo', 'repo');
    expect(result).toBeNull();
  });

  test('should return null on network error', async () => {
    const mockFetch = jest.fn().mockImplementation(() =>
      Promise.reject(new Error('Network error'))
    );
    global.fetch = mockFetch as unknown as typeof global.fetch;

    const result = await getLiveLink('', 'https://github.com/antperdev/repo', 'repo');
    expect(result).toBeNull();
  });

  test('should include Authorization header if GITHUB_TOKEN is defined', async () => {
    process.env.GITHUB_TOKEN = 'secret-token';
    const mockFetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ homepage: 'https://my-site.com' }),
      })
    );
    global.fetch = mockFetch as unknown as typeof global.fetch;

    await getLiveLink('', 'https://github.com/antperdev/repo', 'repo');
    
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/repos/antperdev/repo',
      expect.objectContaining({
        headers: expect.objectContaining({
          'Authorization': 'token secret-token',
        }),
      })
    );
  });
});
