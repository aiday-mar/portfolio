"use client";

import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="contact" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50">
            <div className="mx-auto max-w-2xl">
                <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Get in Touch
                </h2>
                <div className="mx-auto mb-4 h-1 w-12 rounded bg-blue-600" />
                <p className="mb-12 text-center text-zinc-600 dark:text-zinc-400">
                    Have a project in mind or want to chat? Send me a message!
                </p>

                {submitted ? (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
                        <p className="text-lg font-medium text-green-800 dark:text-green-300">
                            Thanks for reaching out! I&apos;ll get back to you soon.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSubmitted(true);
                        }}
                        className="space-y-6"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
