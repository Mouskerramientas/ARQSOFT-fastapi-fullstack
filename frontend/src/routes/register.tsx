import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../components/RegisterForm";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="md:pt-24">
      <RegisterForm />
    </div>
  );
}
