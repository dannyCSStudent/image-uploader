import { Navbar, ImageUpload, Footer } from "./components";

const App = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-auto justify-between">
          <ImageUpload />
        </div>
        <div className="flex flex-col inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>

    </div>
               
  )
}

export default App;