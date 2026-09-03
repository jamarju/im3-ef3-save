(() => {
  "use strict";

  const SOURCE_SIZE = 525376;
  const TARGET_SIZE = 1050688;
  const SOURCE_SHA256 = "be848d31aa26bf3f6fa978c7071dc128ffb9ecae9320eac945f293185f8aaa78";
  const TARGET_SHA256 = "ed9f407c11c0cfe3c5d17c4f382a8b64188d35e87ba300eccce6492d8af1077a";
  const PATCH_BASE64 = "1sPEAAABm4cpALcRwJBAAKMkixmISiABAElNMy1FRi1TQVZFAgIAAKAAIAB42KIAvYDgnQAB6OBl0PWiAKkAneQD6OAY0PhMAAH/eNipN4UBqQCNAN6pB40C3qIAvQC4nQAFvQC5nQAGvQC6nQAH6NDrqSKFS6kFhUwgFAWpALAGwECwAqmAjeYDu52A3+jgYND1reYDCTaNsN8GjQLeTAmA/2VhcGnBTS/NMjnGMDQwINYxLjQACHilS0ilTEipYIVLIEsAur0AAYVMyksYkHBMZwFMpAFMOQJMQAJMRAJMTgJMWAJMjgJM2aqNVYWpVY2qgqmgjVWFrfLfAI3//6IHjgLeYOXi5dDbolWO49+M5N+ihY4C3o3//0y7363//2DN//9gom+gf7FLnYDf3YDf0CGIyhDyogDoGL2A32XoTB7Q6BiQBqkBjbnfOGiFTGiFS7BIqaqg5SDV36CFINXfqVWiqqDiINffoqqggiDX36mQrQCgjfHfrgGgjrnfyQHQBuCk0ALwDMkg0Dng4tA18AKwUK0AgK4BgAjJINAZ4OLQFaA/jADergKA0BOuAqDQEogQ8BiQEqkC0AqpA9AGqQTQAqkFoOCp8CDX36CAINffrbnfsAiu8d+gQCgYYCg4YI233465347t34y63wh4mCm/je6FwOCQBSDB37ADIJ7fohQg7N/wBsrQ+BiQYxiQcsCA8ASg4Kmgje7fyKmqiIiIgMjIyK23ogCO7d+IiKkw/6qo0CSggCg4sAIoGKy63665YAnK0PiI0PUYkM7djWCt8t9gjfPfjunfjOrfYI7034z1343232Ag6N/w34zxut/wO63039AQrfXf0Ait9t/wC8723871387035BFOLBCrunfrerfyaCQAglAqK233yCA37Ak7unf0Bnu6t+t898p4M3q39AMrfPfCgoKjerf7vLfGK263/ChrPHfrvD/rfIDyQHwCskC0ANMALFMCbCt399K6rAQyQHQA0zTpkwAvyCktUyA3634EPADzvgQregDjV3fjXTfrfADjVzfjXPfrvYDjl7fjnXfrPcDjF/fjHbfuo5Z345w370BAY1a341x370CAY1b341y36kBjWPyAAGdEN/o4CDQ9aIfmqkALN/fjd7fIDCrreQDjX/freUDjX3fqQKNINCtfd8p740R0KkAjXsBjWLfjWLfIPO2oh+aILSrkANMCbAgf7WpAEwBpwcYjQCN3672A6z3A63oA0it8ANIKGhgjXjfyQLwK6kArXjfyQPQE61o3xhtat+Ne9+tad9ta9+NY98gf7WteN9MS6ete9+NTd+tY9+NTt8guasgnampAI1g30xlpyApqLAIIM+nsAsAqLADTKWped/wNckDsBjJAvAGrXrfTLmnrXrfILmnsB4TrXnfOOkBCYAgz6dgGGCuYN+dAN/uYN+tYN/JENAEIACo6I5g8BngIPASrWPfKR/JH9ATrXvfGG1g35AKTACo4BCo8CIguqsb7iDQGK17321gY99pAGDfGGCtVt8NV9/QBSC9qLBdrUrfyQHwQADQDq1U38kgsAeqvRDfTHaorVXf0AiuVN8glaiwF61U34X8rVXfhf2gALH8rkrf4ALQAikPSCCpqGgYYCC8AjhgoACK2YSv8AfIwBXQ9RhguTDfOGDuVN/QA+5V361W39ADzlffzlbfYDrJAfBeTanJA9ADTHaprknf4AGQA0ybqanAjVTfqQONVd+pdI1WV0rf7knfGGAAAQABA7BwvWyvjVTfvW+vjVXfvXKvjVbfvXWvR714e36BAbAe2AQCOGCpAI1J30y9qK173zjtTd+NT+1O341QKskB8EbJAvBqT6qtTU7fjXXfrU/fjXbfrVDfjXffTGxkZWZn3wFMAadoaWpr3yC8rBG2qQJsbW5v3yD2q6kDcHFyc9+pBK1o341Y361r3415361s3416361vB62tWHmtemMvrSB/tSAqroa1IBqytbWtf9+NINCpGwDcjQLcjQPcqQEgvbKpAI14jWogbrXHtO5qbd+tbeGtat/JNNDaTCqrIAKvTGOupQKNMN+lA40x36UEjTLfpQ6NM9+lE40036VOjTXfpYGNNt+lho0336WIjTjfpYmNOd+lj40636WQjTvfpZaNPN+ll40936WfjT7fpaCNP9+l9I1A36X8jUHfpf2NQt+l/o1D36X/jUSNYd+pNo1+363f3ymACaUAjXzfYKI4TIDfYK1j30oYaTiqrXsJgIX9rWLf8Aal/Ulghf1grW9g0J3AA+jgL70A1J3wA+jgHfCNCQSNCgSt1w8pD40IBKkAjQsEjQwE3J0QBOjgEN2dIKkfjRAEjRESBI0T7wONDQSNDgSNDwSN0wON1AON3gON3wONHQSNLQSlAI0w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";

  const sourceInput = document.querySelector("#source");
  const patchButton = document.querySelector("#patch");
  const status = document.querySelector("#status");
  let selectedFile = null;

  function setStatus(message, error = false, success = false) {
    status.textContent = message;
    status.classList.toggle("error", error);
    status.classList.toggle("success", success);
  }

  async function sha256(bytes) {
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)]
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
  }

  function decodeBase64(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  }

  function readInteger(bytes, state) {
    let value = 0;
    let count = 0;
    let byte;
    do {
      if (state.offset >= bytes.length || count === 5) {
        throw new Error("The xdelta stream contains an invalid integer.");
      }
      byte = bytes[state.offset++];
      value = value * 128 + (byte & 0x7f);
      count += 1;
    } while (byte & 0x80);
    return value;
  }

  function decodeXdelta(delta, source) {
    if (delta.length < 5 ||
        delta[0] !== 0xd6 || delta[1] !== 0xc3 ||
        delta[2] !== 0xc4 || delta[3] !== 0 ||
        delta[4] !== 0) {
      throw new Error("The embedded patch is not the expected VCDIFF stream.");
    }

    let offset = 5;
    const windowIndicator = delta[offset++];
    if (windowIndicator !== 1) {
      throw new Error("The embedded xdelta stream uses an unsupported window.");
    }

    const streamState = { offset };
    const sourceLength = readInteger(delta, streamState);
    const sourceOffset = readInteger(delta, streamState);
    const deltaLength = readInteger(delta, streamState);
    offset = streamState.offset;
    const deltaEnd = offset + deltaLength;
    if (deltaEnd !== delta.length) {
      throw new Error("The embedded xdelta stream has an invalid length.");
    }

    const windowState = { offset };
    const targetLength = readInteger(delta, windowState);
    const deltaIndicator = delta[windowState.offset++];
    if (deltaIndicator !== 0) {
      throw new Error("The embedded xdelta stream uses unsupported compression.");
    }
    const dataLength = readInteger(delta, windowState);
    const instructionLength = readInteger(delta, windowState);
    const addressLength = readInteger(delta, windowState);
    offset = windowState.offset;

    const data = delta.subarray(offset, offset + dataLength);
    offset += dataLength;
    const instructions = delta.subarray(offset, offset + instructionLength);
    offset += instructionLength;
    const addresses = delta.subarray(offset, offset + addressLength);
    if (offset + addressLength !== deltaEnd) {
      throw new Error("The embedded xdelta sections are malformed.");
    }
    if (sourceLength !== 443305 || sourceOffset + sourceLength > source.length ||
        targetLength !== TARGET_SIZE) {
      throw new Error("The embedded xdelta stream does not match this CRT.");
    }

    const sourceWindow = source.subarray(sourceOffset, sourceOffset + sourceLength);
    const outputSpace = new Uint8Array(sourceLength + targetLength);
    outputSpace.set(sourceWindow);

    let targetOffset = sourceLength;
    let dataOffset = 0;
    const instructionState = { offset: 0 };
    const addressState = { offset: 0 };
    const near = new Uint32Array(4);
    const same = new Uint32Array(3 * 256);
    let nextNear = 0;

    function add(size) {
      if (dataOffset + size > data.length ||
          targetOffset + size > outputSpace.length) {
        throw new Error("The embedded xdelta ADD exceeds its section.");
      }
      outputSpace.set(data.subarray(dataOffset, dataOffset + size), targetOffset);
      dataOffset += size;
      targetOffset += size;
    }

    function run(size) {
      if (dataOffset >= data.length || targetOffset + size > outputSpace.length) {
        throw new Error("The embedded xdelta RUN exceeds its section.");
      }
      outputSpace.fill(data[dataOffset++], targetOffset, targetOffset + size);
      targetOffset += size;
    }

    function copy(size, mode) {
      let address;
      if (mode === 0) {
        address = readInteger(addresses, addressState);
      } else if (mode === 1) {
        address = targetOffset - readInteger(addresses, addressState);
      } else if (mode < 6) {
        address = near[mode - 2] + readInteger(addresses, addressState);
      } else {
        const sameIndex = (mode - 6) * 256 + addresses[addressState.offset++];
        address = same[sameIndex];
      }
      if (address < 0 || address >= targetOffset ||
          address + size > outputSpace.length) {
        throw new Error("The embedded xdelta COPY is outside its window.");
      }
      for (let index = 0; index < size; index += 1) {
        outputSpace[targetOffset + index] = outputSpace[address + index];
      }
      targetOffset += size;
      near[nextNear] = address;
      nextNear = (nextNear + 1) % near.length;
      same[address % same.length] = address;
    }

    while (instructionState.offset < instructions.length) {
      const code = instructions[instructionState.offset++];
      if (code === 0) {
        run(readInteger(instructions, instructionState));
      } else if (code === 1) {
        add(readInteger(instructions, instructionState));
      } else if (code < 19) {
        add(code - 1);
      } else if (code === 19) {
        copy(readInteger(instructions, instructionState), 0);
      } else if (code < 35) {
        copy(code - 16, 0);
      } else if (code === 35) {
        copy(readInteger(instructions, instructionState), 1);
      } else if (code < 51) {
        copy(code - 32, 1);
      } else if (code === 51) {
        copy(readInteger(instructions, instructionState), 2);
      } else if (code < 67) {
        copy(code - 48, 2);
      } else if (code === 67) {
        copy(readInteger(instructions, instructionState), 3);
      } else if (code < 83) {
        copy(code - 64, 3);
      } else if (code === 83) {
        copy(readInteger(instructions, instructionState), 4);
      } else if (code < 99) {
        copy(code - 80, 4);
      } else if (code === 99) {
        copy(readInteger(instructions, instructionState), 5);
      } else if (code < 115) {
        copy(code - 96, 5);
      } else if (code === 115) {
        copy(readInteger(instructions, instructionState), 6);
      } else if (code < 131) {
        copy(code - 112, 6);
      } else if (code === 131) {
        copy(readInteger(instructions, instructionState), 7);
      } else if (code < 147) {
        copy(code - 128, 7);
      } else if (code === 147) {
        copy(readInteger(instructions, instructionState), 8);
      } else if (code < 163) {
        copy(code - 144, 8);
      } else if (code < 235) {
        const pair = code - 163;
        const mode = Math.floor(pair / 12);
        const remainder = pair % 12;
        add(Math.floor(remainder / 3) + 1);
        copy(remainder % 3 + 4, mode);
      } else if (code < 239) {
        add(code - 234);
        copy(4, 6);
      } else if (code < 243) {
        add(code - 238);
        copy(4, 7);
      } else if (code < 247) {
        add(code - 242);
        copy(4, 8);
      } else {
        copy(4, code - 247);
        add(1);
      }
    }

    if (instructionState.offset !== instructions.length ||
        dataOffset !== data.length ||
        addressState.offset !== addresses.length ||
        targetOffset !== outputSpace.length) {
      throw new Error("The embedded xdelta stream did not reconstruct the CRT.");
    }
    return outputSpace.slice(sourceLength);
  }

  sourceInput.addEventListener("change", () => {
    selectedFile = sourceInput.files[0] || null;
    patchButton.disabled = !selectedFile;
    if (selectedFile) {
      setStatus("Selected. Click Patch and download CRT.");
    } else {
      setStatus("Choose the original CRT to begin.");
    }
  });

  patchButton.addEventListener("click", async () => {
    if (!selectedFile) return;
    patchButton.disabled = true;
    try {
      setStatus("Reading and verifying the original CRT…");
      const sourceBuffer = await selectedFile.arrayBuffer();
      const sourceBytes = new Uint8Array(sourceBuffer);
      if (sourceBytes.length !== SOURCE_SIZE) {
        throw new Error("Wrong source size: " + sourceBytes.length + " bytes.");
      }
      if (await sha256(sourceBuffer) !== SOURCE_SHA256) {
        throw new Error("This is not the expected original IM3 CRT.");
      }

      setStatus("Applying xdelta patch locally…");
      const outputBytes = decodeXdelta(decodeBase64(PATCH_BASE64), sourceBytes);
      if (await sha256(outputBytes) !== TARGET_SHA256) {
        throw new Error("The patched CRT failed its result checksum.");
      }

      const url = URL.createObjectURL(
        new Blob([outputBytes], { type: "application/octet-stream" })
      );
      const download = document.createElement("a");
      download.href = url;
      download.download = "IM3_ICON64_easyflash_save.crt";
      download.hidden = true;
      document.body.append(download);
      download.click();
      download.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      setStatus("Done. Download started.", false, true);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error), true);
    } finally {
      patchButton.disabled = false;
    }
  });
})();
