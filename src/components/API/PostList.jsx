import { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null); // State lưu bài viết đang được chọn

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data.slice(0, 9)); // Lấy 9 bài viết đầu tiên để chia đều thành 3 hàng
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (post) => {
    setSelectedPost(post); // Cập nhật bài viết đang được chọn
  };

  const closeModal = () => {
    setSelectedPost(null); // Đóng modal
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-full min-h-screen p-8 bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold mb-10 text-center text-gray-900 tracking-wide">
        Danh sách bài viết
      </h2>
      <div className="flex justify-center mb-6">
        <button
          onClick={fetchPosts}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md"
        >
          Tải lại
        </button>
      </div>
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="h-48 bg-gray-300 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-8 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {post.body}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => openModal(post)} // Mở modal khi nhấn vào "Đọc thêm"
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    Đọc thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-4/5 md:w-2/3 lg:w-1/2 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              {selectedPost.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {selectedPost.body}
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal} // Đóng modal khi nhấn "Đóng"
                className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
