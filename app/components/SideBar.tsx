

export default function SideBar() {
  return (
    <div className="flex flex-col w-72 items-center min-h-screen border-r border-zinc-600">
        <header className="flex flex-col mt-6 relative group">
            <h1
                className="
                text-5xl
                tracking-tight
                "
            >
                夜型。
            </h1>
            <p
                className="
                text-[11px]
                tracking-[0.3em]
                text-gray-400
                uppercase
                ml-2
                "
            >
                yorugata
            </p>
            
            <span
                className="
                absolute top-full mt-2
                text-xs
                rounded
                opacity-0
                group-hover:opacity-100
                transition-opacity
                "
            >
                今日も頑張ろう
            </span>
        </header>
        <hr className="w-full border-zinc-600 mt-8"/>
        <main></main>
    </div>
    )
}
