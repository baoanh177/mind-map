function ContactPage() {
    return (
        <>
            <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
                <form class="p-10">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                            >
                                First Name
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder="Jane"
                            />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name"
                            >
                                Last Name
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password"
                            >
                                Email Address
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email"
                                type="email"
                                placeholder="********@*****.**"
                            />
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password"
                            >
                                Your Message
                            </label>
                            <textarea
                                rows="10"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            ></textarea>
                        </div>
                        <div class="flex justify-between w-full px-3">
                            <button
                                class="shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
                <div
                    class="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center"
                    style={{backgroundImage: "url(https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"}}
                ></div>
            </div>
        </>
    )
}

export default ContactPage
