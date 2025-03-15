import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/failures/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/failures/create"!</div>
}
