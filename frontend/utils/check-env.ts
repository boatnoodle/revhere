export const isBranchDevelop = () => {
  return (
    process.env.NODE_ENV === 'development' ||
    (process.env.NOW_GITHUB_COMMIT_REF && process.env.NOW_GITHUB_COMMIT_REF === 'develop')
  )
}
