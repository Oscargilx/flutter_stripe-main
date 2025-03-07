// Root build.gradle.kts

buildscript {
    // Define version properties
    val kotlinVersion = "2.0.21"
    val buildToolsVersion = "35.0.0"
    val minSdkVersion = 21
    val compileSdkVersion = 35
    val targetSdkVersion = 35

    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:8.1.1")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.9.10")
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

// Configure a custom build directory for the entire project
val newBuildDir: Directory = rootProject.layout.buildDirectory.dir("../../build").get()
rootProject.layout.buildDirectory.value(newBuildDir)

subprojects {
    val newSubprojectBuildDir: Directory = newBuildDir.dir(project.name)
    project.layout.buildDirectory.value(newSubprojectBuildDir)
}

subprojects {
    project.evaluationDependsOn(":app")
}

// Register a clean task to delete the custom build directory
tasks.register<Delete>("clean") {
    delete(rootProject.layout.buildDirectory)
}
