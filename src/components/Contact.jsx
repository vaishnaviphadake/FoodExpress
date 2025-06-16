// const Contact = () => {
// 	return (
// 		<div className="flex justify-center items-center min-h-screen bg-gray-100">
// 			<div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
// 				<h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>

// 				<form className="space-y-4">
// 					<div>
// 						<label className="block text-sm font-medium text-gray-700">
// 							Email
// 						</label>
// 						<input
// 							type="email"
// 							placeholder="Enter your email"
// 							className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 						/>
// 					</div>

// 					<div>
// 						<label className="block text-sm font-medium text-gray-700">
// 							Mobile Number
// 						</label>
// 						<input
// 							type="tel"
// 							placeholder="Enter your mobile number"
// 							className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 						/>
// 					</div>

// 					<div>
// 						<label className="block text-sm font-medium text-gray-700">
// 							Message
// 						</label>
// 						<textarea
// 							rows="4"
// 							placeholder="Your message"
// 							className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 						></textarea>
// 					</div>

// 					<button
// 						type="submit"
// 						className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
// 					>
// 						Submit
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Contact;
import React from "react";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
	return (
		<div className="max-w-6xl mx-auto px-4 py-10">
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
					Contact Us
				</h1>
				<p className="text-gray-600 text-lg">
					Have a question, feedback, or need support? We're here to help!
				</p>
			</div>

			{/* Contact Container */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Contact Form */}
				<form className="bg-white shadow-lg rounded-xl p-6 space-y-6">
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Name
						</label>
						<input
							type="text"
							placeholder="Your name"
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
							required
						/>
					</div>
					<div>
						<label
							className="block mb-2 text-sm font-medium text-gray-700"
							placeholder="Enter your email"
						>
							Email
						</label>
						<input
							type="email"
							placeholder="you@example.com"
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
							required
						/>
					</div>
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-700">
							Message
						</label>
						<textarea
							rows="5"
							placeholder="Write your message..."
							className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
					>
						Send Message
					</button>
				</form>

				{/* Contact Info */}
				<div className="bg-gray-50 shadow-lg rounded-xl p-6 space-y-6">
					<div className="flex items-start space-x-4">
						<FaMapMarkerAlt className="text-orange-500 mt-1" />
						<div>
							<h4 className="text-lg font-semibold">Office Address</h4>
							<p className="text-gray-600">
								Foodie Lane, Tower B, 6th Floor <br />
								Pune, Maharashtra, India - 560001
							</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<FaPhoneAlt className="text-orange-500 mt-1" />
						<div>
							<h4 className="text-lg font-semibold">Phone</h4>
							<p className="text-gray-600">+91 98765 43210 (10AM - 8PM)</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<FaEnvelope className="text-orange-500 mt-1" />
						<div>
							<h4 className="text-lg font-semibold">Email</h4>
							<p className="text-gray-600">support@foodify.in</p>
						</div>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-2">Follow Us</h4>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer"
								className="text-gray-600 hover:text-blue-600"
							>
								<FaFacebook size={22} />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="text-gray-600 hover:text-pink-500"
							>
								<FaInstagram size={22} />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer"
								className="text-gray-600 hover:text-blue-400"
							>
								<FaTwitter size={22} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noreferrer"
								className="text-gray-600 hover:text-blue-700"
							>
								<FaLinkedin size={22} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
