"use client";
import { useCallback } from "react";
import dynamic from "next/dynamic";
// import suzanne from "/public/model/suzanne.gltf";

import FileDrop from "@/components/fileDrop";
import arrayBufferToString from "@/utils/arrayBufferToString";
import useStore from "@/store/store";
import Code from "@/components/code";
const Loading = () => <p className="text-4xl font-bold">Loading ...</p>;

// const Result = dynamic(() => import("@/components/result"), {
//   ssr: false,
//   loading: Loading,
// });

export default function Home() {
  const { buffer } = useStore((state) => ({
    buffer: state.buffer,
  }));
  const {
    fileName,
    code,

    generateScene,
  } = useStore();

  console.log("store: ", buffer);
  const CreateCode = async (buffer) => {
    await generateScene({
      types: { value: false, hint: "Add Typescript definitions" },
      shadows: { value: true, hint: "Let meshes cast and receive shadows" },
      instance: { value: false, hint: " Instance re-occuring geometry" },
      instanceall: {
        label: "instance all",
        value: false,
        hint: "Instance all geometries (for cheaper re-use)",
      },
      verbose: {
        value: false,
        hint: "Verbose output w/ names and empty groups",
      },
      keepnames: {
        value: false,
        label: "keep names",
        hint: "Keep original names",
      },
      keepgroups: {
        value: false,
        label: "keep groups",
        hint: "Keep (empty) groups",
      },
      meta: { value: false, hint: "Include metadata (as userData)" },
      precision: {
        value: 3,
        min: 1,
        max: 8,
        step: 1,
        hint: "Number of fractional digits (default: 2)",
      },
      buffer: buffer,
    });
  };
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log("file", file);

      const reader = new FileReader();
      reader.onabort = () => console.error("file reading was aborted");
      reader.onerror = () => console.error("file reading has failed");
      reader.onload = async () => {
        const data = reader.result;

        useStore.setState({ buffer: data, fileName: file.name });
        arrayBufferToString(data, (a) =>
          useStore.setState({ textOriginalFile: a })
        );
        CreateCode(data);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  // const useSuzanne = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   useStore.setState({
  //     buffer: "test",
  //     fileName: "suzanne.gltf",
  //     textOriginalFile: "suzanne",
  //   });
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <main
        className="flex flex-col items-center justify-center flex-1"
        style={{ height: "calc(100vh - 56px)" }}
      >
        {buffer ? <div>receive</div> : <FileDrop onDrop={onDrop} />}
        {code && <Code>{code}</Code>}
      </main>
    </div>
  );
}
