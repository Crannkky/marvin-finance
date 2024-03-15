import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const resetPasswordContent = {
  title: "Reset your password",
  description:
    "Please fill in the email address associated to your account. We will send you a link to reset your password via email.",

  children: (
    <div className="mt-4 flex flex-col items-start justify-start">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="relative mt-2 w-full rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="your@example.com"
        />
      </div>
    </div>
  ),
  btnText: "Send reset link",
};
