import { useState } from "react";
import Input from "../components/Input";
import Header from "./Header";

export default function App() {
  const [formData, setFormData] = useState({
    date: "",
    location: "",
    airQuality: "",
    waterPh: "",
  });

  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/generate-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);
      setReport(data.choices[0].message.content);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {" "}
      <Header />
      <div className="font-mono flex flex-col items-center min-h-screen text-slate-200 background">
        <div className="w-[100vw] min-h-screen  flex flex-col gap-10 items-center bg-gradient-to-t from-slate-900/30 to-black/90">
          <h1 className=" text-3xl font-bold underline underline-offset-2 decoration-red-800 decoration-2 mt-10">
            Generate Environmental Report
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              name="date"
              type="date"
              label="Date"
              value={formData.date}
              onChange={handleChange}
            ></Input>
            <Input
              name="location"
              type="Text"
              placeholder=""
              label="Location"
              value={formData.location}
              onChange={handleChange}
            />
            <Input
              name="airQuality"
              type="Text"
              placeholder=""
              label="Air Quality"
              value={formData.airQuality}
              onChange={handleChange}
            />
            <Input
              name="waterPh"
              type="Text"
              placeholder=""
              label="Water pH"
              value={formData.waterPh}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-red-800 p-3 rounded-xl hover:bg-red-700 cursor-pointer"
            >
              {loading ? (
                <p className="animate-pulse">Generating...</p>
              ) : (
                "Generate Report"
              )}
            </button>
          </form>
          {report && (
            <div className="w-4/6 p-10 bg-white/20 mb-10">
              <p>Date: {formData.date}</p>
              <p>Location: {formData.location}</p>
              <p>Air Quality: {formData.airQuality}</p>
              <p>Water pH: {formData.waterPh}</p>
              {report}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
