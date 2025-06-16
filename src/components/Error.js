import { useRouteError } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const Error = () => {
	const err = useRouteError();
	console.log(err);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 text-center">
			<div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
				<div className="flex flex-col items-center space-y-4">
					<AlertTriangle className="text-amber-500 w-12 h-12" />
					<h1 className="text-3xl font-bold text-amber-600">Oops!</h1>
					<h2 className="text-xl text-gray-700">Something went wrong.</h2>
					<h3 className="text-md text-gray-500">
						{err?.status}: {err?.statusText || "Unexpected Error"}
					</h3>
					<button
						className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
						onClick={() => window.history.back()}
					>
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error;
