type Message = {
  id: string;
  recipientId: string;
};

const getMessageRecord = async (id: string) => {
  switch (id) {
    case "message-1":
      return {
        id: "abc-1",
        recipientId: "xyz-1",
      };

    case "message-2":
      return {
        id: "abd-2",
        recipientId: "xyz-2",
      };

    default:
      return false;
  }
};

const getMessageStatus = async (id: string) => {
  return {
    status: "foo",
  };
};

const getMessageRecipient = async (id: string) => {
  return {
    userId: "foo",
    email: "bar",
  };
};

const getMessageMetaData = async (message: Message) => {
  const messageStatus = getMessageStatus(message.id);
  const messageRecipient = getMessageRecipient(message.recipientId);

  return {
    recipient: "foo",
    status: "bar",
  };
};

/**
 * given a messageId, return an object with the message, the messageRecipient and the messageStatus
 */
export const getMessage = async (messageId: string) => {
  const message = await getMessageRecord(messageId);

  const meta = await getMessageMetaData(record);

  return {
    message,
    messageRecipient: meta.recipient,
    messageStatus: meta.status,
  };
};
