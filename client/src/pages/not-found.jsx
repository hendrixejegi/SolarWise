import image from "@/assets/images/error-404.jpg";

function NotFoundPage() {
  return (
    <div className="w-full max-w-3xl mx-auto flex-1 flex items-center justify-center">
      <img src={image} alt="page not found" className="max-w-md" />
    </div>
  );
}

export default NotFoundPage;
