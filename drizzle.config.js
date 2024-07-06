/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-content-gen_owner:RNEwO6myxBL0@ep-wild-unit-a5rajtlh.us-east-2.aws.neon.tech/ai-content-gen?sslmode=require',
    }
  };