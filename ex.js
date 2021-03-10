const { User } = require('./models');

const user = await User.findOne({});
const comment1 = await Comment.create();
const comment2 = await Comment.create();
await user.addComment([comment1, comment2]);
await user.addComment(comment);
// 또는
await user.addComment(comment.id);
