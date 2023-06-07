const createResumePrompt = function (user, oldResume, jobDescription) {
  return `Modify resume according to the job description the user is applying for:
   User: ${user}
   resume: ${oldResume}
   job description: ${jobDescription}`;
};

module.exports = { createResumePrompt }