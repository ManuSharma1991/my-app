import { useEffect, useState } from "react";
import { fabric } from "fabric";

const FabricUtil = () => {

   const [canvas, setCanvas] = useState<fabric.Canvas>();


   useEffect(() => {
      createNodes();
      canvas?.on("object:added", (event) => {
         console.log("object added", event)
      })
   }, [canvas])

   useEffect(() => {
      setCanvas(initializeCanvas());
   }, []);

   const initializeCanvas = () => {
      return new fabric.Canvas('fabricCanvas', {
         width: 800,
         height: 600,
         backgroundColor: 'red',
      })
   }
   const update = (object: fabric.IEvent<MouseEvent>) => {
      console.log("hello 3")
      console.log(object.transform?.target)
   }

   const createNodes = () => {
      if (canvas) {
         const text = new fabric.Textbox('Hi, Varun. If you see the console log statements you can see that the console. logs pertaining to addition of objects on canvas are not appearing', {
            left: 200,
            top: 150,
            width: 250,
            fontSize: 16,
            textBackgroundColor: `#000000`,
            fill: `#FFFF00`,
            textAlign: "justify"
         });
         canvas.add(text)
      }
   }
   return <canvas id="fabricCanvas"></canvas>;
}

export default FabricUtil