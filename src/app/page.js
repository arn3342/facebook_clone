import css from './page.module.css'
import Sidebar from "@/app/_home/sidebar";
import PostContent from "@/app/( RouteGroups )/[user]/_comp/_content/postContent";
import PostPhoto from "@/app/( RouteGroups )/[user]/_comp/_content/postPhoto";
import PostVideos from "@/app/( RouteGroups )/[user]/_comp/_content/postVideos";
import RightSidebar from "@/app/_home/right_sidebar";
import Story from "@/app/_home/story";

export default function Login(){
    
    return(
        <main className={css.main_container}>
            <section className={css.main_grid}>
                <div className={css.left_sidebar}>
                    <Sidebar />
                </div>
                <div className={css.main_body_container}>
                    <Story />
                    <PostContent />
                    <PostVideos />
                    <PostPhoto />
                    <PostVideos />
                    <PostPhoto />
                </div>
                <div className={css.right_sidebar}>
                    <RightSidebar />
                </div>
            </section>
        </main>
    )
}