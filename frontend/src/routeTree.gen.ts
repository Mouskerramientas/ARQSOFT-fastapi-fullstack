/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as DashboardUsersImport } from './routes/dashboard/users'
import { Route as DashboardServicesImport } from './routes/dashboard/services'
import { Route as DashboardServersImport } from './routes/dashboard/servers'
import { Route as DashboardProfileImport } from './routes/dashboard/profile'
import { Route as DashboardFailuresImport } from './routes/dashboard/failures'
import { Route as DashboardServicesIndexImport } from './routes/dashboard/services/index'
import { Route as DashboardServersIndexImport } from './routes/dashboard/servers/index'
import { Route as DashboardFailuresIndexImport } from './routes/dashboard/failures/index'
import { Route as DashboardServicesCreateImport } from './routes/dashboard/services/create'
import { Route as DashboardServicesIdImport } from './routes/dashboard/services/$id'
import { Route as DashboardServersCreateImport } from './routes/dashboard/servers/create'
import { Route as DashboardServersIdImport } from './routes/dashboard/servers/$id'
import { Route as DashboardFailuresCreateImport } from './routes/dashboard/failures/create'
import { Route as DashboardFailuresIdImport } from './routes/dashboard/failures/$id'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardUsersRoute = DashboardUsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardServicesRoute = DashboardServicesImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardServersRoute = DashboardServersImport.update({
  id: '/servers',
  path: '/servers',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardProfileRoute = DashboardProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardFailuresRoute = DashboardFailuresImport.update({
  id: '/failures',
  path: '/failures',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardServicesIndexRoute = DashboardServicesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardServicesRoute,
} as any)

const DashboardServersIndexRoute = DashboardServersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardServersRoute,
} as any)

const DashboardFailuresIndexRoute = DashboardFailuresIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardFailuresRoute,
} as any)

const DashboardServicesCreateRoute = DashboardServicesCreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => DashboardServicesRoute,
} as any)

const DashboardServicesIdRoute = DashboardServicesIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => DashboardServicesRoute,
} as any)

const DashboardServersCreateRoute = DashboardServersCreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => DashboardServersRoute,
} as any)

const DashboardServersIdRoute = DashboardServersIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => DashboardServersRoute,
} as any)

const DashboardFailuresCreateRoute = DashboardFailuresCreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => DashboardFailuresRoute,
} as any)

const DashboardFailuresIdRoute = DashboardFailuresIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => DashboardFailuresRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/failures': {
      id: '/dashboard/failures'
      path: '/failures'
      fullPath: '/dashboard/failures'
      preLoaderRoute: typeof DashboardFailuresImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/profile': {
      id: '/dashboard/profile'
      path: '/profile'
      fullPath: '/dashboard/profile'
      preLoaderRoute: typeof DashboardProfileImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/servers': {
      id: '/dashboard/servers'
      path: '/servers'
      fullPath: '/dashboard/servers'
      preLoaderRoute: typeof DashboardServersImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/services': {
      id: '/dashboard/services'
      path: '/services'
      fullPath: '/dashboard/services'
      preLoaderRoute: typeof DashboardServicesImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/users': {
      id: '/dashboard/users'
      path: '/users'
      fullPath: '/dashboard/users'
      preLoaderRoute: typeof DashboardUsersImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/failures/$id': {
      id: '/dashboard/failures/$id'
      path: '/$id'
      fullPath: '/dashboard/failures/$id'
      preLoaderRoute: typeof DashboardFailuresIdImport
      parentRoute: typeof DashboardFailuresImport
    }
    '/dashboard/failures/create': {
      id: '/dashboard/failures/create'
      path: '/create'
      fullPath: '/dashboard/failures/create'
      preLoaderRoute: typeof DashboardFailuresCreateImport
      parentRoute: typeof DashboardFailuresImport
    }
    '/dashboard/servers/$id': {
      id: '/dashboard/servers/$id'
      path: '/$id'
      fullPath: '/dashboard/servers/$id'
      preLoaderRoute: typeof DashboardServersIdImport
      parentRoute: typeof DashboardServersImport
    }
    '/dashboard/servers/create': {
      id: '/dashboard/servers/create'
      path: '/create'
      fullPath: '/dashboard/servers/create'
      preLoaderRoute: typeof DashboardServersCreateImport
      parentRoute: typeof DashboardServersImport
    }
    '/dashboard/services/$id': {
      id: '/dashboard/services/$id'
      path: '/$id'
      fullPath: '/dashboard/services/$id'
      preLoaderRoute: typeof DashboardServicesIdImport
      parentRoute: typeof DashboardServicesImport
    }
    '/dashboard/services/create': {
      id: '/dashboard/services/create'
      path: '/create'
      fullPath: '/dashboard/services/create'
      preLoaderRoute: typeof DashboardServicesCreateImport
      parentRoute: typeof DashboardServicesImport
    }
    '/dashboard/failures/': {
      id: '/dashboard/failures/'
      path: '/'
      fullPath: '/dashboard/failures/'
      preLoaderRoute: typeof DashboardFailuresIndexImport
      parentRoute: typeof DashboardFailuresImport
    }
    '/dashboard/servers/': {
      id: '/dashboard/servers/'
      path: '/'
      fullPath: '/dashboard/servers/'
      preLoaderRoute: typeof DashboardServersIndexImport
      parentRoute: typeof DashboardServersImport
    }
    '/dashboard/services/': {
      id: '/dashboard/services/'
      path: '/'
      fullPath: '/dashboard/services/'
      preLoaderRoute: typeof DashboardServicesIndexImport
      parentRoute: typeof DashboardServicesImport
    }
  }
}

// Create and export the route tree

interface DashboardFailuresRouteChildren {
  DashboardFailuresIdRoute: typeof DashboardFailuresIdRoute
  DashboardFailuresCreateRoute: typeof DashboardFailuresCreateRoute
  DashboardFailuresIndexRoute: typeof DashboardFailuresIndexRoute
}

const DashboardFailuresRouteChildren: DashboardFailuresRouteChildren = {
  DashboardFailuresIdRoute: DashboardFailuresIdRoute,
  DashboardFailuresCreateRoute: DashboardFailuresCreateRoute,
  DashboardFailuresIndexRoute: DashboardFailuresIndexRoute,
}

const DashboardFailuresRouteWithChildren =
  DashboardFailuresRoute._addFileChildren(DashboardFailuresRouteChildren)

interface DashboardServersRouteChildren {
  DashboardServersIdRoute: typeof DashboardServersIdRoute
  DashboardServersCreateRoute: typeof DashboardServersCreateRoute
  DashboardServersIndexRoute: typeof DashboardServersIndexRoute
}

const DashboardServersRouteChildren: DashboardServersRouteChildren = {
  DashboardServersIdRoute: DashboardServersIdRoute,
  DashboardServersCreateRoute: DashboardServersCreateRoute,
  DashboardServersIndexRoute: DashboardServersIndexRoute,
}

const DashboardServersRouteWithChildren =
  DashboardServersRoute._addFileChildren(DashboardServersRouteChildren)

interface DashboardServicesRouteChildren {
  DashboardServicesIdRoute: typeof DashboardServicesIdRoute
  DashboardServicesCreateRoute: typeof DashboardServicesCreateRoute
  DashboardServicesIndexRoute: typeof DashboardServicesIndexRoute
}

const DashboardServicesRouteChildren: DashboardServicesRouteChildren = {
  DashboardServicesIdRoute: DashboardServicesIdRoute,
  DashboardServicesCreateRoute: DashboardServicesCreateRoute,
  DashboardServicesIndexRoute: DashboardServicesIndexRoute,
}

const DashboardServicesRouteWithChildren =
  DashboardServicesRoute._addFileChildren(DashboardServicesRouteChildren)

interface DashboardRouteChildren {
  DashboardFailuresRoute: typeof DashboardFailuresRouteWithChildren
  DashboardProfileRoute: typeof DashboardProfileRoute
  DashboardServersRoute: typeof DashboardServersRouteWithChildren
  DashboardServicesRoute: typeof DashboardServicesRouteWithChildren
  DashboardUsersRoute: typeof DashboardUsersRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardFailuresRoute: DashboardFailuresRouteWithChildren,
  DashboardProfileRoute: DashboardProfileRoute,
  DashboardServersRoute: DashboardServersRouteWithChildren,
  DashboardServicesRoute: DashboardServicesRouteWithChildren,
  DashboardUsersRoute: DashboardUsersRoute,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/dashboard/failures': typeof DashboardFailuresRouteWithChildren
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard/servers': typeof DashboardServersRouteWithChildren
  '/dashboard/services': typeof DashboardServicesRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/failures/$id': typeof DashboardFailuresIdRoute
  '/dashboard/failures/create': typeof DashboardFailuresCreateRoute
  '/dashboard/servers/$id': typeof DashboardServersIdRoute
  '/dashboard/servers/create': typeof DashboardServersCreateRoute
  '/dashboard/services/$id': typeof DashboardServicesIdRoute
  '/dashboard/services/create': typeof DashboardServicesCreateRoute
  '/dashboard/failures/': typeof DashboardFailuresIndexRoute
  '/dashboard/servers/': typeof DashboardServersIndexRoute
  '/dashboard/services/': typeof DashboardServicesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard/users': typeof DashboardUsersRoute
  '/dashboard': typeof DashboardIndexRoute
  '/dashboard/failures/$id': typeof DashboardFailuresIdRoute
  '/dashboard/failures/create': typeof DashboardFailuresCreateRoute
  '/dashboard/servers/$id': typeof DashboardServersIdRoute
  '/dashboard/servers/create': typeof DashboardServersCreateRoute
  '/dashboard/services/$id': typeof DashboardServicesIdRoute
  '/dashboard/services/create': typeof DashboardServicesCreateRoute
  '/dashboard/failures': typeof DashboardFailuresIndexRoute
  '/dashboard/servers': typeof DashboardServersIndexRoute
  '/dashboard/services': typeof DashboardServicesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/dashboard/failures': typeof DashboardFailuresRouteWithChildren
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard/servers': typeof DashboardServersRouteWithChildren
  '/dashboard/services': typeof DashboardServicesRouteWithChildren
  '/dashboard/users': typeof DashboardUsersRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/dashboard/failures/$id': typeof DashboardFailuresIdRoute
  '/dashboard/failures/create': typeof DashboardFailuresCreateRoute
  '/dashboard/servers/$id': typeof DashboardServersIdRoute
  '/dashboard/servers/create': typeof DashboardServersCreateRoute
  '/dashboard/services/$id': typeof DashboardServicesIdRoute
  '/dashboard/services/create': typeof DashboardServicesCreateRoute
  '/dashboard/failures/': typeof DashboardFailuresIndexRoute
  '/dashboard/servers/': typeof DashboardServersIndexRoute
  '/dashboard/services/': typeof DashboardServicesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/dashboard'
    | '/login'
    | '/register'
    | '/dashboard/failures'
    | '/dashboard/profile'
    | '/dashboard/servers'
    | '/dashboard/services'
    | '/dashboard/users'
    | '/dashboard/'
    | '/dashboard/failures/$id'
    | '/dashboard/failures/create'
    | '/dashboard/servers/$id'
    | '/dashboard/servers/create'
    | '/dashboard/services/$id'
    | '/dashboard/services/create'
    | '/dashboard/failures/'
    | '/dashboard/servers/'
    | '/dashboard/services/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/login'
    | '/register'
    | '/dashboard/profile'
    | '/dashboard/users'
    | '/dashboard'
    | '/dashboard/failures/$id'
    | '/dashboard/failures/create'
    | '/dashboard/servers/$id'
    | '/dashboard/servers/create'
    | '/dashboard/services/$id'
    | '/dashboard/services/create'
    | '/dashboard/failures'
    | '/dashboard/servers'
    | '/dashboard/services'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/dashboard'
    | '/login'
    | '/register'
    | '/dashboard/failures'
    | '/dashboard/profile'
    | '/dashboard/servers'
    | '/dashboard/services'
    | '/dashboard/users'
    | '/dashboard/'
    | '/dashboard/failures/$id'
    | '/dashboard/failures/create'
    | '/dashboard/servers/$id'
    | '/dashboard/servers/create'
    | '/dashboard/services/$id'
    | '/dashboard/services/create'
    | '/dashboard/failures/'
    | '/dashboard/servers/'
    | '/dashboard/services/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  DashboardRoute: DashboardRouteWithChildren,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/dashboard",
        "/login",
        "/register"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/failures",
        "/dashboard/profile",
        "/dashboard/servers",
        "/dashboard/services",
        "/dashboard/users",
        "/dashboard/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/dashboard/failures": {
      "filePath": "dashboard/failures.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/failures/$id",
        "/dashboard/failures/create",
        "/dashboard/failures/"
      ]
    },
    "/dashboard/profile": {
      "filePath": "dashboard/profile.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/servers": {
      "filePath": "dashboard/servers.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/servers/$id",
        "/dashboard/servers/create",
        "/dashboard/servers/"
      ]
    },
    "/dashboard/services": {
      "filePath": "dashboard/services.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/services/$id",
        "/dashboard/services/create",
        "/dashboard/services/"
      ]
    },
    "/dashboard/users": {
      "filePath": "dashboard/users.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/failures/$id": {
      "filePath": "dashboard/failures/$id.tsx",
      "parent": "/dashboard/failures"
    },
    "/dashboard/failures/create": {
      "filePath": "dashboard/failures/create.tsx",
      "parent": "/dashboard/failures"
    },
    "/dashboard/servers/$id": {
      "filePath": "dashboard/servers/$id.tsx",
      "parent": "/dashboard/servers"
    },
    "/dashboard/servers/create": {
      "filePath": "dashboard/servers/create.tsx",
      "parent": "/dashboard/servers"
    },
    "/dashboard/services/$id": {
      "filePath": "dashboard/services/$id.tsx",
      "parent": "/dashboard/services"
    },
    "/dashboard/services/create": {
      "filePath": "dashboard/services/create.tsx",
      "parent": "/dashboard/services"
    },
    "/dashboard/failures/": {
      "filePath": "dashboard/failures/index.tsx",
      "parent": "/dashboard/failures"
    },
    "/dashboard/servers/": {
      "filePath": "dashboard/servers/index.tsx",
      "parent": "/dashboard/servers"
    },
    "/dashboard/services/": {
      "filePath": "dashboard/services/index.tsx",
      "parent": "/dashboard/services"
    }
  }
}
ROUTE_MANIFEST_END */
