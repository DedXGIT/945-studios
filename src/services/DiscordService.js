import axios from "axios";

function DiscordService(clearForm) {
  const Send = async (data) => {
    const body = {
      content: "Message Received",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "954 Studios Form",
          description: data,
        },
      ],
    };

    try {
      const data = await axios.post(
        "https://discord.com/api/webhooks/1148526309543268413/kLPEhXg-t1f1dB698R3vJJJy7q728OQd_S7Ny5J8byEhwrgdgreTLT38Z2EEKpcf2PpS",
        body
      );
      console.log(data);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    Send,
  };
}

export default DiscordService;