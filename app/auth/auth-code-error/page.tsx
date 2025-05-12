export default function AuthCodeError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-lg text-center">
        <h1 className="mb-4 text-3xl font-bold">Authentication Error</h1>
        <p className="mb-8 text-gray-600">
          There was an error processing your authentication request. Please try
          signing in again.
        </p>
        <a
          href="/auth/signin"
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Return to Sign In
        </a>
      </div>
    </div>
  );
}
