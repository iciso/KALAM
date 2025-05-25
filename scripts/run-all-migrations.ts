import { exec } from "child_process"
import { promisify } from "util"

const execAsync = promisify(exec)

async function runScript(scriptPath: string): Promise<void> {
  console.log(`\n========== Running ${scriptPath} ==========\n`)

  try {
    const { stdout, stderr } = await execAsync(`npx ts-node ${scriptPath}`)

    if (stdout) {
      console.log(stdout)
    }

    if (stderr) {
      console.error(stderr)
    }

    console.log(`\n========== Completed ${scriptPath} ==========\n`)
  } catch (error) {
    console.error(`Error running ${scriptPath}:`, error)
  }
}

async function runAllMigrations() {
  console.log("Starting all migrations...")

  // First, verify the schema
  await runScript("scripts/verify-schema.ts")

  // Run migrations in order
  await runScript("scripts/migrate-all-vocabulary.ts")
  await runScript("scripts/migrate-related-words.ts")
  await runScript("scripts/migrate-predefined-lists.ts")

  // Verify the migration
  await runScript("scripts/verify-migration.ts")

  // Check final status
  await runScript("scripts/check-migration-status.ts")

  console.log("All migrations completed!")
}

// Execute all migrations
runAllMigrations().catch((error) => console.error("Migration process failed:", error))
