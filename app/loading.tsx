export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-background">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        <p className="mt-5 text-sm font-semibold text-muted-foreground">Loading portfolio...</p>
      </div>
    </div>
  );
}
