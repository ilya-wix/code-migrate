import { resolveFixture } from './utils';
import { createTestkit } from 'code-migrate/testing';

test('remove', async () => {
  const testkit = createTestkit();

  await testkit.run({ fixtures: resolveFixture('remove') });
});
