export function BackgroundLayers() {
  return (
    <div aria-hidden="true" className="app-background">
      <div className="app-background__gradient" />
      <div className="app-background__grid" />
      <div className="app-background__glow app-background__glow--primary" />
      <div className="app-background__glow app-background__glow--secondary" />
      <div className="app-background__noise" />
    </div>
  );
}
