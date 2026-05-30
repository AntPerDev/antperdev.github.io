---
title: "PostgresSQL en Docker"
description: "Guía rápida para levantar y conectar a un contenedor de PostgreSQL y Adminer usando Docker."
date: 2023-10-02
tags: ["PostgresSQL", "Docker", "Database", "Backend"]
---

Levantar bases de datos para desarrollo local puede ser una tarea tediosa. En esta guía rápida veremos cómo crear y administrar contenedores Docker para PostgreSQL y Adminer en cuestión de segundos.

## Crear contenedor Docker con PostgreSQL

Para iniciar un contenedor de Postgres en segundo plano que se elimine al detenerlo y exponga el puerto estándar 5432:

```bash
$ docker run -d --rm --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres
```

## Conectar al contenedor de Docker por consola

Puedes iniciar otro contenedor interactivo temporal que corra `psql` para conectarse al contenedor de base de datos que acabamos de levantar:

```bash
$ docker run -it --rm --link postgres:postgres postgres psql -h postgres -U postgres
```

## Conectar al contenedor usando Adminer

Adminer es una excelente herramienta web ligera para gestionar bases de datos. Podemos levantarla y enlazarla a Postgres con un solo comando:

```bash
$ docker run -d --rm --link postgres:db -p 8080:8080 adminer
```

Una vez levantado, apunta tu navegador a: [http://127.0.0.1:8080](http://127.0.0.1:8080) y utiliza las credenciales que configuramos (`mysecretpassword`).

## Comprobar los contenedores funcionando

Puedes verificar el estado de tus contenedores ejecutando:

```bash
$ docker ps
```

Salida esperada:
```plaintext
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS                    NAMES
6791bc460155   adminer    "entrypoint.sh php -…"   12 seconds ago   Up 12 seconds   0.0.0.0:8080->8080/tcp   jolly_shamir
4d87cee59600   postgres   "docker-entrypoint.s…"   58 seconds ago   Up 57 seconds   0.0.0.0:5432->5432/tcp   postgres
```

## Parar y eliminar contenedores

Como no configuramos volúmenes persistentes para simplificar este ejemplo, detenerlos los destruirá completamente, dejándote un entorno limpio:

```bash
$ docker stop CONTAINER_ID
$ docker rm CONTAINER_ID
```
