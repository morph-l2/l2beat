/*
                      ====== IMPORTANT NOTICE ======

DO NOT EDIT OR RENAME THIS FILE

This is a migration file. Once created the file should not be renamed or edited,
because migrations are only run once on the production server. 

If you find that something was incorrectly set up in the `up` function you
should create a new migration file that fixes the issue.

*/

import { Knex } from 'knex'

const sixHourlyIndex = 'reports_unix_timestamp_six_hourly_index'
const dailyIndex = 'reports_unix_timestamp_daily_index'
const create = (name: string, time: number) =>
  `create index if not exists ${name} on reports (unix_timestamp, project_id, asset_id) where unix_timestamp % ${time} = 0`
const drop = (name: string) => `drop index ${name}`

export async function up(knex: Knex) {
  await knex.schema.raw(create(sixHourlyIndex, 6 * 60 * 60))
  await knex.schema.raw(create(dailyIndex, 24 * 60 * 60))
}

export async function down(knex: Knex) {
  await knex.schema.raw(drop(sixHourlyIndex))
  await knex.schema.raw(drop(dailyIndex))
}
