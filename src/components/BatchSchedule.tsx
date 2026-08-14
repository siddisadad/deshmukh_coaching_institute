import { PlaceholderNote } from "@/components/PlaceholderNote";
import { SectionHeading } from "@/components/SectionHeading";
import { batchSchedule } from "@/content/site";

export function BatchSchedule() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Timetable"
          title={batchSchedule.heading}
          description="Choose a slot that fits school hours. Exact batches are confirmed during counselling."
        />
        <div className="mt-6 flex justify-center">
          <PlaceholderNote>{batchSchedule.note}</PlaceholderNote>
        </div>
        <div className="mt-10 overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-5 py-3 font-semibold">Course</th>
                <th className="px-5 py-3 font-semibold">Days</th>
                <th className="px-5 py-3 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              {batchSchedule.rows.map((row) => (
                <tr key={row.course} className="border-t border-line">
                  <td className="px-5 py-4 font-semibold text-navy">{row.course}</td>
                  <td className="px-5 py-4 text-muted">{row.days}</td>
                  <td className="px-5 py-4 text-muted">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
