import DrawingCanvas from "@/components/DrawCanvas"
import Tab from "@/components/TabComponents"


const page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <DrawingCanvas></DrawingCanvas>
      </div>
      <div>
        <Tab/>
      </div>
    </div>
  )
}

export default page