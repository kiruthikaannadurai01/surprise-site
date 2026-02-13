"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"

export default function PhotoScreen({ onNext }) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const photos = [
    { id: 1, src: "/images/image1.jpg" },
    { id: 2, src: "/images/image2.jpg" },
    { id: 3, src: "/images/image3.jpg" },
  ]

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-b from-black via-purple-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="text-2xl md:text-3xl text-pink-200 leading-relaxed mb-4 font-semibold">
          From the first day I met you, life became{" "}
          <span className="text-pink-400 font-bold">brighter...</span>
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          You've made every moment so special 💕
        </motion.p>
      </motion.div>

      {/* Swiper */}
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="py-10"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={photo.src}
                  alt="Memory"
                  width={400}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Button */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-pink-300/80 text-sm mb-6 italic"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Now for the most important part...
        </motion.p>

        <button
          onClick={onNext}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
        >
          <Heart className="w-5 h-5 mr-2 fill-current" />
          See the Message
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </motion.div>
    </motion.div>
  )
}
