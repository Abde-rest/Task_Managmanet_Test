const apiforegtpassword = async (password: string, token: string) => {
  try {
    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    });

    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      throw new Error(data.message || "Somthing is wrong");
    }

    return {
      message: data.message,
      ok: data.ok,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
        ok: 500,
      };
    }
    return {
      message: "Ther is problem",
      ok: 500,
    };
  }
};

export default apiforegtpassword;
