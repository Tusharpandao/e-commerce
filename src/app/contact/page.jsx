import styles from "./contact.module.css";

export default function Contact() {
    return (
        <main className={`flex flex-col items-center justify-center min-h-screen ${styles.contactPage}`}>
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">We would love to hear from you!</p>
        <form className="w-full max-w-md">
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
            ></textarea>
            </div>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
            Send Message
            </button>
        </form>
        </main>
    );
    }