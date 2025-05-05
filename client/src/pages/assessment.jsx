import { AssessmentTool } from "@components/assessment/assessment-tool";

function Assessment() {
  return (
    <main className="wrapper">
      <section className="full-bleed bg-primary-500 py-12">
        <div className="max-w-3xl px-4 mx-auto">
          <h1 className="text-4xl text-white font-bold text-center mb-4">
            Solar Needs Assessment
          </h1>
          <p className="text-white text-center">
            Answer a few questions to get personalized solar recommendations for
            your home or business
          </p>
        </div>
      </section>
      <section className="py-12 full-bleed wrapper bg-primary-50">
        <div className="w-full max-w-4xl m-auto px-4">
          <AssessmentTool />
        </div>
      </section>
    </main>
  );
}

export default Assessment;
