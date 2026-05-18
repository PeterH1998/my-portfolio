export default function AsyncState({ error, label = "Content" }) {
  if (!error) {
    return (
      <div className="flex h-full min-h-48 items-center justify-center px-6 text-center text-sm font-semibold text-white/80">
        Loading {label.toLowerCase()}...
      </div>
    );
  }

  return (
    <div
      role="alert"
      className="flex h-full min-h-48 items-center justify-center px-6 text-center text-sm font-semibold text-white"
    >
      {label} could not be loaded.
    </div>
  );
}
