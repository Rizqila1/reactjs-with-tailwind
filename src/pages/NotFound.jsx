import Button from "../components/Button/Button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-3 font-bold text-3xl ">{"Not Found :("}</h1>

      <Button
        btnText="Link"
        variant="lightgreen"
        style={{ width: "120px", height: "100%" }}
        href="/"
      />
    </div>
  );
}
