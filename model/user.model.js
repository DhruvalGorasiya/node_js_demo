const mongooes = require("mongoose");

const UserSchema = mongooes.Schema(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true },
  },
  {
    collection: "users",
    versionKey: false,
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret.password;
        return ret;
      },
    },
  }
);

const userModel = mongooes.model("UserSchema", UserSchema);

module.exports = userModel;
