import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("ai_output", {
    id: serial("id").primaryKey(),
    formData: varchar('form_data').notNull(),
    aiResponse: text ('ai_response'),
    templateSlug: varchar('template_slug').notNull(),
    createdBy: varchar('created_by').notNull(),
    createdAt: varchar('created_at')
    
})