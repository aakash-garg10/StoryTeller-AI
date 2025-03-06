import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Initialize Neon client with the database URL
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);

// Initialize Drizzle ORM with Neon client and schema
const db = drizzle(sql, { schema });

const result = await db.execute('select 1');

export default db;