import { QuestToDescriptionPipe } from "./quest-to-description.pipe";

describe("QuestToDescriptionPipe", () => {
  it("create an instance", () => {
    const pipe = new QuestToDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
