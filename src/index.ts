const getMessage = async (id: string) => {
  switch (id) {
    case "message-1":
      return {
        id: "abc-1",
        recipient: "xyz-1",
      };

    case "message-2":
      return {
        id: "abd-2",
        recipient: "xyz-2",
      };

    default:
      return false;
  }
};

const getMessageMetaData = async (message: Record<string, string> | false) => {
  // const messageStatus = getMessageStatus(message.id);
  // const messageRecipient = getMessageRecipient(message.recipientId)

  return {
    user: "foo",
    status: "bar",
  };
};

export const formatMessage = async (id: string) => {
  const message = await getMessage(id);

  const metaData = getMessageMetaData(message);

  return {
    ...message,
    meta: metaData,
  };
};
