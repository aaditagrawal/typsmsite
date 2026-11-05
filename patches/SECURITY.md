# Dependency security guard

Removing the unused shadcn CLI and Turbo generator eliminated the last `braces`
consumer from `bun.lock`. The former `braces@3.0.3` patch and its registration are
therefore retired. `bun run test:security` fails if a locked `braces` package
returns without patch protection.

The existing regression corpus remains in `scripts/security-braces.mjs`. Set
`BRACES_PACKAGE` to an absolute package entrypoint to run its expansion, escaping,
range, constrained-stack and bounded-heap checks against an explicit package.
An unpatched 3.0.3 package fails the deep-tree cases. This is useful when assessing
a future dependency that would reintroduce braces; it does not approve that
reintroduction or claim to bound combinatorial expansion.
