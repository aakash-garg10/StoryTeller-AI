import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const StoryData = pgTable("storyData", {
  id: serial("id").primaryKey(),
  storySubject: text("storySubject"),
  storyType: varchar("storyType"),
  AgeGroup: varchar("AgeGroup"),
  ImageStyle: varchar("ImageStyle"),
  output: json("output"),
  coverImage: varchar("coverImage"),
});
