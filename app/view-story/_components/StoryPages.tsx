function StoryPages({ storyChapter }: any) {
  const playSpeech = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    speechSynthesis.cancel(); // Stop ongoing speech
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-purple-600 flex justify-between">
        {storyChapter?.chapter_title}
        <span className="cursor-pointer" onMouseEnter={() => playSpeech(storyChapter?.text)} onMouseLeave={stopSpeech}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-play"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        </span>
      </h2>
      <p className="text-xl p-10 mt-3 rounded-lg bg-purple-100">{storyChapter?.text}</p>
    </div>
  );
}

export default StoryPages;
