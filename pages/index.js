import ImageUploader from "../components/index.js";

export default function Home() {
	return (
		<div className="page">
			<h1>Upload Documents</h1>
			<p>Simple component for upload and validate (client side) images with preview </p>
			<ImageUploader style={{ maxWidth: "500px", margin: "20px auto" }} withPreview={true} />
		</div>
	);
}
