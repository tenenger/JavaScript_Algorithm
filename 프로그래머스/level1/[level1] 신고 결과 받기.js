function solution(id_list, reports, k) {
  let answer = [];
  const AllowedReportUsers = {};
  const reportedUsersCount = {};
  const finalReportedUsers = [];

  for (const id of id_list) {
    AllowedReportUsers[id] = id_list;
    reportedUsersCount[id] = 0;
  }

  for (const report of reports) {
    const [submitedUser, reportedUser] = report.split(" ");

    if (AllowedReportUsers[submitedUser].indexOf(reportedUser) !== -1) {
      AllowedReportUsers[submitedUser] = AllowedReportUsers[
        submitedUser
      ].filter((user) => reportedUser !== user);
      reportedUsersCount[reportedUser] += 1;
    }
  }

  for (const user in reportedUsersCount) {
    const number = reportedUsersCount[user];
    if (number >= k) {
      finalReportedUsers.push(user);
    }
  }

  for (const user in AllowedReportUsers) {
    let count = 0;
    const notReportUserList = AllowedReportUsers[user];

    for (const reportUser of finalReportedUsers) {
      if (!notReportUserList.includes(reportUser)) {
        count += 1;
      }
    }

    answer.push(count);
  }

  return answer;
}
