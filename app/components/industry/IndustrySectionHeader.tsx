export default function IndustrySectionHeader({ id, title, description, icon }:any) {
    return (
      <div id={id} className="flex flex-col items-center justify-center space-y-4 text-center pt-16 pb-8">
        <div className="p-3 rounded-full bg-primary/10">{icon}</div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{title}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{description}</p>
        </div>
      </div>
    )
  }
  