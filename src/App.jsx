import Button from "./components/button";
import Layout from "./components/layout";
function App() {

  return (
    <>
      <div class="bg-accent min-h-screen">
        <h1 className="text-3xl font-bold underline">
          Hello world!
          <Button name='Issa'/>
          <Button name='Pedro'/>
          <Button name='Ana'/>
          <Layout></Layout>
        </h1>
      </div>
    </>
  )
}

export default App
