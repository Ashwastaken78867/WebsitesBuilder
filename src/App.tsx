import WebsiteBuilderShell from "./components/websiteBuilderShell/WebsitesBuilderShell"

function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
     
      <div className="flex-1 flex flex-col overflow-hidden">
        <WebsiteBuilderShell />
      </div>
    </div>
  )
}

export default App
